import React from "react";
import articles from "../dummydata/articles.js";
import Style from "../components/tablestyle.jsx";
import Table from "../components/Evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import Dropdown from "../components/Dropdown.js";
const SEPractice = () => {
    return (
      <div>
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
        <Dropdown/>
               <Style>
                 <Table
                  data={articles}
                  columns={tablecolumns}
                 />
              </Style>

              
      </div>
    );
}
 
export default SEPractice;  
