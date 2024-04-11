// rrd imports
import { redirect } from "react-router-dom";

// helpers
import { deleteItem } from "../helpers/helper.js";
import { toast } from "react-toastify";

export async function logoutAction() {
  // delete the user
  deleteItem({
    key: "userName",
  });
  // Usually should wait for db to respond b4 sending this. Use toast.promise()
  // this works because of the component added at the start of the app.jsx
  toast.success("You've deleted your account");
  // return redirect
  return redirect("/");
}
