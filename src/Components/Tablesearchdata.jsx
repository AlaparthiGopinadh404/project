import React, { useContext, useEffect,  useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Pagination from './pagination/pagination';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Loader/Loader';
import { ColorContext } from '../App';



function Tablesearchdata() {
    const [array, setarray] = useState([''])
    const [key, setkey] = useState('');
    const [loader, setloader] = useState(true)
    const navigate = useNavigate();
    const notify = () => toast("component Loaded");


    useEffect(() => {
        gettablesearchdata();

        // const str=localStorage.getItem('data')
        // if(str){
        //     setarray(JSON.parse(str))
        // }
    }, [])
    const gettablesearchdata = () => {
        setkey('')
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log(res);
                setarray(res?.data)
                setloader(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const handlechange = (e) => {
        setkey(e.target.value)
        console.log(key)
        var temp = [...array]
        const x = temp.filter((k, i) => {
            if (k.title.toLowerCase().includes(key.toLowerCase()) || k.body.toLowerCase().includes(key.toLowerCase())) {
                return true;

            }
            else {
                return false;
            }
        })
        setarray(x);
        console.log(x);
        // localStorage.setItem('data',JSON.stringify(x))
        if (e.target.value === '') {
            gettablesearchdata()
        }

    }
    const abc = () => {
        var temp3 = [...array]
        temp3.sort((a, b) => {
            if (a.title == b.title) {
                return 1;
            }
            else {
                return -1;
            }
        })
        console.log(temp3);
        setarray(temp3);
    }

    const [currentPage, setCurrentPage] = useState(1);

    const [recordsPerPage] = useState(5);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = array?.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(array.length / recordsPerPage);
    // const def = ()=>{
    //     var temp4=[...array]
    //     temp4.sort((c,d)=>{
    //         if(c.body==d.body){
    //             return 1;
    //         }
    //         else{
    //             return -1;
    //         }
    //     })
    //     console.log(temp4)
    //     setarray(temp4)
    // }
    const themes = useContext(ColorContext);
    const {theme,settheme}=themes
    return (
        <div className={theme?"bg-light":"bg-secondary text-white"}>
            {
                loader ? <Loader /> :

                    <div className='container'>
                        <button onClick={notify} className='justify-content-end btn btn-primary'>Toaster</button>

                        <input type="search" name="search" className='m-2' value={key} onChange={handlechange} />
                        {/* <button disabled={!key}>Click</button> */}
                        <table className='table table-bordered table-responsive'>
                            <thead>
                                <tr>
                                    <th>S.NO</ th>
                                    <th onClick={abc} >Title<div className='' ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up" viewBox="0 0 16 16">
                                        <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
                                    </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
                                            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                                        </svg>
                                    </div>
                                    </th>
                                    <th>Body</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentRecords && currentRecords.map((a, i) => {
                                    return <tr key={i}>
                                        <td>{a?.id}</td>
                                        <td onClick={() => { navigate('/Tablesearchdataedit', { state: { a, i } }) }}>{a?.title}</td>
                                        <td>{a?.body}</td>
                                    </tr>
                                })

                                }
                            </tbody>
                        </table>
                        <ToastContainer />
                        {/* <TranslatorProvider translations={translations}>
                            <Home />
                        </TranslatorProvider> */}
                        <Pagination
                            nPages={nPages}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />

                    </div>
            }
        </div>
    )
}

export default Tablesearchdata;
