import React from "react";

import Avatar from '../../assets/avatar.svg'

import {Container} from "./style"

const User = () => {
    return (
        <Container>
            <span>romim</span>
            <img src={Avatar} alt="" />
        </Container>
    )
}

export default User