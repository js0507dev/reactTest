import React from 'react'

class LocalStorage extends React.Component {
    static getItem(key) {
        const value = window.localStorage.getItem(key);
        return (value ? value : "")
    }
    static getNumberItem(key) {
        try {
            const item = window.localStorage.getItem(key);
            return Number(item);
        } catch(e) {
            return 0;
        }
    }
    static getObjectItem(key) {
        try {
            const item = window.localStorage.getItem(key);
            const obj = JSON.parse(item);
            if(obj instanceof Object) {
                return obj;
            }
        }
        catch(e) {}
        return new Object();
    }
    static getListItem(key) {
        try {
            const item = window.localStorage.getItem(key);
            const list = JSON.stringify(item);
            if(list instanceof Array) {
                return list;
            }
        }
        catch(e) {}
        return new Array();
    }
    
    static setTextItem(key, value) {
        try {
            window.localStorage.setItem(key, value);
            return true;
        } catch(e) {
            return false;
        }
    }
    static setObjectItem(key, value) {
        try {
            if(value instanceof Object) {
                window.localStorage.setItem(key, JSON.stringify(value));
                return true;
            }
        }
        catch(e) {}
        return false;
    }
    static setListItem(key, value) {
        try {
            if(value instanceof Array) {
                window.localStorage.setItem(key, JSON.stringify(value));
                return true;
            }
        }
        catch(e) {}
        return false;
    }
    static removeItem(key) {
        window.localStorage.setItem(key, null);
    }
}

class SessionStorage extends React.Component {
    static getItem(key) {
        const value = window.sessionStorage.getItem(key);
        return (value ? value : "")
    }
    static getNumberItem(key) {
        try {
            const item = window.sessionStorage.getItem(key);
            return Number(item);
        } catch(e) {
            return 0;
        }
    }
    static getObjectItem(key) {
        try {
            const item = window.sessionStorage.getItem(key);
            const obj = JSON.parse(item);
            if(obj instanceof Object) {
                return obj;
            }
        }
        catch(e) {}
        return new Object();
    }
    static getListItem(key) {
        try {
            const item = window.sessionStorage.getItem(key);
            const list = JSON.stringify(item);
            if(list instanceof Array) {
                return list;
            }
        }
        catch(e) {}
        return new Array();
    }
    
    static setTextItem(key, value) {
        try {
            window.sessionStorage.setItem(key, value);
            return true;
        } catch(e) {
            return false;
        }
    }
    static setObjectItem(key, value) {
        try {
            if(value instanceof Object) {
                window.sessionStorage.setItem(key, JSON.stringify(value));
                return true;
            }
        }
        catch(e) {}
        return false;
    }
    static setListItem(key, value) {
        try {
            if(value instanceof Array) {
                window.sessionStorage.setItem(key, JSON.stringify(value));
                return true;
            }
        }
        catch(e) {}
        return false;
    }
    static removeItem(key) {
        window.sessionStorage.setItem(key, null);
    }
}

export {LocalStorage, SessionStorage}