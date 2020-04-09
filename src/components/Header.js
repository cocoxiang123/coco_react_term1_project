import React from "react";
import { Link } from "react-router-dom";
import { removeItem, setItem } from "../services/storage";
import { AwesomeButton } from "react-awesome-button";

function Header() {
    const onDeleteItem = () => {
        let result = window.confirm("Are you sure to delete all notes?");
        if (result) {
            removeItem("notes");
            setItem("notes", []);
            window.location.reload(false);
        }
    };
    return (
        <div className="header">
            <div className="d-flex p-3">
                <Link to="/" className="logo pt-1">Rainbow Note</Link>
                <AwesomeButton type="secondary" className="mx-4" onPress={onDeleteItem}>
                    Clear All
                 </AwesomeButton>
            </div>
        </div>
    );
}

export default Header;
