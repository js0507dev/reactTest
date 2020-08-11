import React from 'react'

function Storage() {
    function getSessionValue(props) {
        if(props.key) {
            return window.sessionStorage.getItem(props.key);
        }
        return null;
    }
    function setSessionValue(props) {
        if(props.key) {
            window.sessionStorage.setItem(props.key, props.value);
        }
    }
    function getLocalValue(props) {
        if(props.key) {
            return window.localStorage.getItem(props.key);
        }
        return null;
    }
    function setLocalValue(props) {
        if(props.key) {
            window.localStorage.setItem(props.key, props.value);
        }
    }
}

export default Storage;