import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axiosProvider from '../../APIs/axiosProvider';
import Loader from '../Loader/Loader';
import ScholarshipCard from './ScholarshipCard';
import { Link } from 'react-router-dom';

const BestScholarships = () => {
  const [scholarships, setScholarships] = useState([]);
  const [scholarshipsLoading, setScholarshipsLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const { loading } = useContext(AuthContext);

  useEffect(() => {
    axiosProvider
      .get("/scholarships")
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : [];
        setScholarships(data);
        setScholarshipsLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching scholarships:", error.message);
        setScholarships([]);
        setScholarshipsLoading(false);
      });
  }, [showAll]);

  if (loading || scholarshipsLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        {Array.isArray(scholarships) && scholarships.length > 0 ? (
          [...scholarships]
            .sort((a, b) => Number(a.universityWorldRank) - Number(b.universityWorldRank))
            .slice(0, 6)
            .map((scholarship) => (
              <ScholarshipCard key={scholarship._id} scholarship={scholarship} />
            ))
        ) : (
          <p className="text-center col-span-3">No scholarships available right now.</p>
        )}
      </div>

      <div className="w-full flex justify-center mt-5">
        <Link to="/all-scholarships" className="btn btn-ghost mx-auto">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default BestScholarships;