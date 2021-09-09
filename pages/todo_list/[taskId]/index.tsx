import { Box } from "@material-ui/core";
import NavBar from "../../../Layouts/navBarLayout";
// import TodoListLayout from "../../Layouts/taskListLayout";
import TodoListLayout from "../index";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Height } from "@material-ui/icons";
const TaskDetails = ({ children }: { children: React.ReactNode }) => {
  const [selectedTime, setSelectedTime] = useState("");
  const router = useRouter();
  const currentPath = router.pathname;
  const taskId = router.query.taskId;
  const handleChange = (e: any) => {
    if (e.target.checked) {
      setSelectedTime(e.target.value);
    }
  };
  const handleSubmit = (val: any) => {
    val.preventDefault();
    console.log(currentPath);
    router.push(`${taskId}/${selectedTime}`);
  };
  return (
    <Box style={{ display: "flex",}}>
      <Box style={{ border:'2px solid', height:'90vh' ,padding:'0px 20px'}}>
        <h1>
          I am task no. <span style={{ color: "green" }}>{taskId}</span>
        </h1>
        <h3>Please select time you want to finish this task</h3> {" "}
        <ul>
          <li>
            <Link href={`/todo_list/${taskId}/Morning`}><a>Morning</a></Link>
          </li>
          <li>
            <Link href={`/todo_list/${taskId}/Afternoon`}><a>Afternoon</a></Link>
          </li>
          <li>
            <Link href={`/todo_list/${taskId}/Evening`}><a> Evening</a></Link>
          </li>
        </ul>
      </Box>

      <Box>{children}</Box>
    </Box>
  );
};
TaskDetails.getLayout = (page: { page: React.ReactNode }) => {
  // <NavBar>
  return <TodoListLayout>{page}</TodoListLayout>;
  {
    /* </NavBar> */
  }
};
export default TaskDetails;
