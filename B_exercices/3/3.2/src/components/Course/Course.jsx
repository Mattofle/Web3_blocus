import Header from "components/Header/Header";
import Part from "components/Part/Part";

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Part parts={course.parts} />
      
    </div>
  );
};

export default Course;
