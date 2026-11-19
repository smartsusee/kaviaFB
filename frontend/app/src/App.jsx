import { useEffect, useState } from 'react'
import './App.css'
import { BaseUrl_Api } from './api/BaseUrl';


function App() {


  const [users, setUsers] = useState([])

  const [ref, setref] = useState(true)



  function getMethod() {
    try {

      BaseUrl_Api.get("/").then((res) => {

        console.log(res.data.data);

        setUsers(res.data.data)

      }).catch((err) => {

        throw new Error(err);

      })



    }
    catch (err) {


      throw new Error(err);



    }

  }



  function deleteFun(userId) {


    BaseUrl_Api.delete(`/${userId}`).then((res) => {
      alert(res.data.message)

      setref(!ref)

    }).catch((err) => {

      throw err;


    })



  }




  useEffect(() => {
    getMethod()
  }, [ref])


  return (
    <>
      <style>{`
        .table-wrap { width: 100%; max-width: 900px; margin: 20px auto; padding: 0 12px; box-sizing: border-box; }
        .user-table { width: 100%; border-collapse: collapse; background: #fff; color: #222; }
        .user-table th, .user-table td { padding: 12px 14px; text-align: left; border-bottom: 1px solid #ddd; word-break: break-word; }
        .user-table th { background: #1f2937; color: #fff; }
        .user-table .btn { padding: 6px 12px; margin-right: 6px; border: none; border-radius: 4px; cursor: pointer; color: #fff; }
        .user-table .edit { background: #2563eb; }
        .user-table .delete { background: #dc2626; }

        @media (max-width: 600px) {
          .user-table thead { display: none; }
          .user-table, .user-table tbody, .user-table tr, .user-table td { display: block; width: 100%; box-sizing: border-box; }
          .user-table tr { margin-bottom: 12px; border: 1px solid #ddd; border-radius: 6px; overflow: hidden; }
          .user-table td { display: flex; justify-content: space-between; gap: 12px; text-align: right; }
          .user-table td::before { content: attr(data-label); font-weight: 600; text-align: left; }
        }
      `}</style>

      <div className="table-wrap">
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((v, i) => {


                return (

                  <tr key={v._id}>
                    <td data-label="Name">{v.name}</td>
                    <td data-label="Email">{v.email}</td>
                    <td data-label="Action">
                      <button className="btn edit">Edit</button>
                      <button className="btn delete" onClick={() => { deleteFun(v._id) }}>Delete</button>
                    </td>
                  </tr>
                )

              })
            }

          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
