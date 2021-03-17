import React from 'react';

const Element = () => {
    return (
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            </input>    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
    )
}

export default Element