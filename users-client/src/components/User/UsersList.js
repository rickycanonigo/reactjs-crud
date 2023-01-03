import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import User from '../api/User';
import UserCreate from './UserCreate';



const UsersList = () => {
    const [userdata, setuserdata] = useState(null);
    var toDeleteIds = [];
    const navigate = useNavigate();

    const detectCheck = (e) =>{
        if (e.target.type === 'checkbox' && !e.target.checked) {
            var index = toDeleteIds.indexOf(e.target.value);
            toDeleteIds.splice(index, 1);
        }else {
            toDeleteIds.push(parseInt(e.target.value));
        }
    }

    const LoadDetail = (id) => {
        navigate("/user/detail/"+id);
    }

    const RemoveUser = (ids) => {
        if (window.confirm('Do you want to remove?')) {
            User.deleteUser(ids).then((resp) => {
                setuserdata(resp.data.users);
                navigate('/');
            }).catch((err) => {
                console.log("error : "+err.message);
            });
        }
    }

    const getList =()=>{
        User.getUsersList().then((resp) => {
            setuserdata(resp.data.users);
            navigate('/');
        }).catch((err) => {
            console.log(err.message);
        });
    }

    useEffect(() => {
        getList();
    },[]);
    
    return (
    <>
        <UserCreate userDataToList={getList}/>
        <div className="container mt-3">
            <div className="card">
                <div className="card-body">
                    <h3>Users List</h3>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th width={'5%'} className="text-center">Check</th>
                                <th width={'38%'}>Name</th>
                                <th width={'37%'}>Username</th>
                                <th width={'20%'} className="text-center">Show Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userdata && userdata.length > 0 ?
                                userdata.map(item => {
                                    return (
                                    <tr key={item.id}>
                                        <td className="text-center"><input type="checkbox" value={item.id} name={item.id} className="form-check-input"
                                        onClick={detectCheck}/></td>
                                        <td>{item.name.first} {item.name.middle[0]?item.name.middle[0]+".":""} {item.name.last} </td>
                                        <td>
                                            {item.username}
                                        </td>
                                        <td className="d-flex justify-content-center">
                                            <button type="button" onClick={() => { LoadDetail(item.id) }} className="btn btn-outline-primary btn-sm">Details</button>
                                        </td>
                                    </tr>
                                    )
                                })
                                :
                                <tr>
                                    <td colSpan={4}>
                                        <center>No Data Available</center>
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </Table>
                    <Row className="d-flex justify-content-center mb-2">
                        <Col>
                        <button type="button" id="removeBtn" onClick={() => { RemoveUser(toDeleteIds) }} className="btn btn-outline-danger btn-sm">Remove</button>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    </>
    );
}

export default UsersList;