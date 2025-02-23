import React, { useEffect, useState } from "react";
import { fetchData } from "../services/api";
// import { fetchFromBackend } from './services/api'; 
import './styles/About.css';

interface IAbout {
  _id: string;
  title: string;
  content: string;
}

const About: React.FC = () => {
  const [data, setData] = useState<IAbout[]>([]);
  const [activeBubble, setActiveBubble] = useState(0);

  useEffect(() => {
    fetchData()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the details:", error);
      });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (activeBubble < 3) {
        setActiveBubble(activeBubble + 1);
      }
    }, 2000); // Adjust the duration as needed

    return () => clearInterval(timer);
  }, [activeBubble]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="col-xxl">
    <div className="example-box">
      <img
        className="img-fluid ah-img"
        src="https://s3.ap-southeast-1.wasabisys.com/voltixsite/1698747450835_ABOUT%20main.png?AWSAccessKeyId=K49UPV101Q9KIYF13OOR&Expires=1699026836&Signature=ibHSPvRJAHqe5sItCEr2Z35l7Tc%3D"
        alt="Welcome!"
      ></img>
  <div className="background-shapes col-xxl"></div>
    <div className="container abouthead">
      
      <div className="textStyleLarges1">
        <p>
          We are here to redefine <br></br>the way you do your business!
        </p>
      </div>
      <div className="textStyleMediums1">
        Our team of talented and highly committed professionals<br></br>
        is the key to our success in creating business solutions.
      </div>
      <div className="text1">
        <p>Planning it right</p>
        <p>
          We hold one-to-one meetings with the clients and carefully analyze
          <br></br>
          their needs to form a viable idea that is practicable under their
          budget.
        </p>
      </div>
      <div className="text2">
        <p>Making it as per plan</p>
        <p>
          We then form a project schedule and create a deadline including all
          processes <br></br> involved in it and completes everything on schedule..
        </p>
      </div>
      <div className="text3">
        <p>Delivering it on-time</p>
        <p>
          After a thorough quality check and testing, we deliver the product to
          the clients <br></br>after confirming the final output with them.
        </p>
      </div>
    </div>
    
    <div className="container-fluid mt-4 mb-4">
      {data.map((entry) => (
        <div className="row" key={entry._id}>
          <div className="mb-4 ab">
            <div className="d-flex flex-column">
              <h5 className="ab-title">{entry.title}</h5>
              <p className="ab-content">{entry.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default About;