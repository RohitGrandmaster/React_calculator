import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Display from "./Display";
import One from "./One"


function Cal() {
 
  return (
    <div>
      <Card
        style={{
          position: "absolute",
          top: "7%",
          width: "25rem",
          height: "30rem",
          border: "2px solid",
          left: "25%",
        }}
      >
         <div className="  h-15 w-15 p-4 border-4">
         <Display digit={0} />
         </div>
        <div className="flex justify-center items-center mt-1">
        <One  digit={'c'} />
          <One  digit={1} />
          <One  digit={1} />
        </div>
        <div className="flex justify-center items-center mt-1">
        <One  digit={7} />
          <One  digit={8} />
          <One  digit={9} />
        </div>
        <div className="flex justify-center items-center mt-1">
        <One  digit={4} />
          <One  digit={5} />
          <One  digit={6} />
        </div>
        <div className="flex justify-center items-center mt-1">
          <One  digit={1} />
          <One  digit={2} />
          <One  digit={3} />
         
        </div>
        <div className="flex justify-center items-center mt-1">
        <One  digit={0} />
          
        </div>
        <div style={{ position: "absolute", top: "83px", right: "14%" }}className="bg-orange-300">
          <One  digit={"/"} />
          <One digit={"*"} />
          <One  digit={"-"} />
          <One  digit={"+"} />
          <One  digit={"="} />
        </div>
      </Card>
    </div>
  );
}
import { Clear } from "@mui/icons-material";

export default Cal;
