import { Box } from "@material-ui/core";
import TodoListLayout from "../index";
import TaskDetails from ".";
import { useRouter } from "next/router";
const TaskSlot = () => {
  const router = useRouter();
  const { taskId, timeId } = router.query;
  return (
    <Box  style={{  marginLeft:'30px', width:'500px',border: "2px solid", color: "yellow", background: "green", padding:'10px', fontSize:'23px'}}>
      For {taskId} , you have alotted <span style={{color:'white'}}>{timeId}</span> time.
    </Box>
  );
};
TaskSlot.getLayout = (page: any) => (
  <TodoListLayout>
    <TaskDetails>{page}</TaskDetails>
  </TodoListLayout>
);
export default TaskSlot;
