import { useEffect, useState } from "react";
import supabase from "../lib/supabase";

const CourseList = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const {data, error} = await supabase.from("courses").select("*");
                if (error) throw error;
                setCourses(data);
            } catch (error) {
                console.error("Error fetching courses:", error.message);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div>
            <h2>Course List</h2>
            {courses.map((course) => (
                <div key={course.id}>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <p>Category: {course.category}</p>
                    <p>Price: {course.price}</p>
                </div>
            ))}
        </div>
    );
};

export default CourseList;
