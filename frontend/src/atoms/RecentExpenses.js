import axios from "axios";
import { atom, selector } from "recoil";
const dotenv = require('dotenv');


const recentExpenseSelector = selector({
    key : 'expenseSelector',
    get : async() => {
        const token = window.sessionStorage.getItem("token");
        const response = await axios.get('/api/v1/users/expenses')
    }
})