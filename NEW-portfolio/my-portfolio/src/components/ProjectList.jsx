import React from "react";
import ProjectItem from "./ProjectItem";
import DataProject from "./data";

const ProjectList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get({DataProject})
      .then(res => {
        const responseData = res.data;
        setData(responseData.results);
        console.log(responseData); // Extract the 'results' array from the response
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render


  return (
    <div className="max-w-3xl">
      <h1 className="text-6xl font-bold">Projets</h1>
      <div className=''>

        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
      {DataProject.map((result, index) => (
        <div className="text-white ">
          <span>{result.titleProject}</span>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
