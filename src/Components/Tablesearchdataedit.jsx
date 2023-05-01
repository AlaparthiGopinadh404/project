import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Tablesearchdataedit() {
    // const navigate = useNavigate();
    const data = useLocation();
    var index = data.state.a
    console.log('index', index)
    const [array, setarray] = useState(['']);
    // useEffect(() => {
    //     const str = localStorage.getItem('data')
    //     if (str) {
    //         setarray(JSON.parse(str))
    //     }
    // }, [])
    return (
        <div className=' container w-25'>
            <div className="card bg-info">
                {/* <div class="card-header">
                                search details
                            </div> */}
                <div className="card-body">
                    <blockquote className="blockquote mb-0">

                        <tr>
                            <p>ID:{index.id}</p>
                            <p>Title:{index.title} </p>
                            <p>Body:{index.body}</p>
                            {/* <td><button className='btn btn-primary' onClick={() => { navigate('/Tablesearchdata') }}>Back</button></td> */}
                        </tr>
                    </blockquote>
                </div>
            </div>
        </div>
        // <div>
        //     <table className='table table-bordered-1 table-responsive'>
        //         {/* <thead>
        //             <tr>
        //                 <th>S.NO</th>
        //                 <th>Title</th>
        //                 <th>Body</th>
        //             </tr>
        //         </thead> */}
        //         <tbody>
        //             {
        //                 // <div className=' container w-25'>
        //                 // <div className="card">
        //                 //     {/* <div class="card-header">
        //                 //         search details
        //                 //     </div> */}
        //                 //     <div className="card-body">
        //                 //         <blockquote className="blockquote mb-0">
        //                 //             {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        //                 //             <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
        //                 //              */}
        //                 //              <tr>
        //                 // <p>ID:{index.id}</p>
        //                 // <p>Title:{index.title} </p>
        //                 // <p>Body:{index.body}</p>
        //                 // {/* <td><button className='btn btn-primary' onClick={() => { navigate('/Tablesearchdata') }}>Back</button></td> */}
        //                 // </tr>
        //                 //         </blockquote>
        //                 //     </div>
        //                 // </div>
        //                 // </div>

        //             }
        //         </tbody>
        //     </table>



        // </div>
    )
}

export default Tablesearchdataedit