import { useState, useEffect } from "react";
import Users from "../userApps/users";
import axios from "axios";
import LoadingUsers from "../loading/loadingUsers";

const App = () => {
  
  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  // axios.get('https://reqres.in/api/users')
  // .then(response => {
  //   setUsers(response.data.data);
  // })
  // .catch(error => {
  //   console.error('خطا در دریافت داده‌ها:', error);
  // });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users");
        console.log("sssssss", response.data.data);
        setTimeout(()=>{
          setUsers(response.data.data);
          setIsLoading(!isLoading);
        },1000)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // توجه داشته باشید که آرایه ورودی برای useEffect باید خالی باشد تا فقط هنگام نمایش کامپوننت فراخوانی شود

  return (
    <>
      <button onClick={handleCreate} className="btn btn-lg btn-primary m-5">
        Create
      </button>
      <div className="row">
        {isLoading ? (
          <LoadingUsers />
        ) : (
          users.map((user) => {
            return (
              <div className="col-4 text-center p-5">
                <img
                  src={user.avatar}
                  style={{ borderRadius: "50%", width: "100px" }}
                  alt=""
                />
                <h4>
                  {user.first_name} - {user.last_name}
                </h4>
                <h5>{user.email}</h5>
                <div className="row">
                  <div className="col-6">
                    <button
                      onClick={()=>{handleUpdate(user)}}
                      className="btn btn-info btn-sm"
                    >
                      Update
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      onClick={()=>{handleDelete(user)}}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );

  async function handleCreate() {

    const newUser = {
      first_name:"mammad",
      last_name:"hasanzade",
      email:"hasanzade.hoseyn27@gmail.com",
      avatar:"https:/picsum.photos/300"
    };

    const response = await axios.post('https://reqres.in/api/users',newUser);

    console.log("crcrcr",response);

    setUsers([...users,newUser]);

  }

  async function handleUpdate(user) {
    user.first_name = 'updated';
    const response = await axios.put(`https://reqres.in/api/users/${user.id}`,user);
    console.log("upupup",response);
    const updatedUsers = [...users];
    const index = updatedUsers.indexOf(user);
    updatedUsers[index] = {...user};
    setUsers(updatedUsers);
  }

  async function handleDelete(user) {
    const response = await axios.delete(`https://reqres.in/api/users/${user.id}`);
    const newUsers = users.filter(u=>u.id !==user.id);
    setUsers(newUsers);
  
  }
};

export default App;
