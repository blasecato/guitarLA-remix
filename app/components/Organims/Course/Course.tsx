interface ObjectCourse {
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: any;
}
interface PropsCourse {
  course: ObjectCourse;
}
function Course({ course }: PropsCourse): JSX.Element {
  const { content, image, title } = course;

  return (
    <section
      className="course"
      style={{
        backgroundImage: `linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${image.data.attributes?.url})`,
      }}>
      <div className="contenedor course-grid">
        <div className="content">
          <h2 className="heading">{title}</h2>
          <p className="text">{content}</p>
        </div>
      </div>
    </section>
  );
}

export default Course;
