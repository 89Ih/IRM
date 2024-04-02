import Table from "react-bootstrap/Table";
import "../../Projects.css";
import { useEffect, useState } from "react";
const TableDropdown = (props) => {

    const {children, th1, th2, th3, value, onChange , opened, setOpened} = props;

    return (
        <details className="_drp_table" open={opened}>
            <summary className={ `_fr pt-1 ${opened === false && '_drp_table_border_bottom'}`}>
                <input
                    type="text"
                    className="_ipt_table"
                    placeholder="search VCS :"
                    value={value}
                    onChange={onChange}
                />
                <button type="button" onClick={setOpened} >
                 { opened === false 
                 ?  <span style={{color:"#cccccc33"}} >&#9660;</span>
                 :  <span style={{color:"#cccccc33"}} >&#9650;</span>}
                </button>
            </summary>

            <Table  bordered hover size="sm">
                <thead>
                    <tr className="fz1">
                        <th>{th1}</th>
                        <th>{th2}</th>
                        <th>{th3}</th>
                    </tr>
                </thead>
                <tbody>
                {children}
                </tbody>

            </Table>
        </details>
    );
};
const Body = ({td1,td2,td3 ,handleSelectedItems})=>{

return(

    <tr className="fz2" onClick={handleSelectedItems}>
        <td>{td1}</td>
        <td>{td2}</td>
        <td>{td3}</td>
    </tr>

)

}
TableDropdown.Body = Body
export default TableDropdown;
