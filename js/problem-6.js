/*
৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।

*/

const studnets = {
    name: "Abu Hanif",
    age: 27,
    fatherName: 'Nizam Uddin',
    address: {
        village: "Chandrapur",
        post: 'Chandrapur',
        dist: 'Lalamonirhat',
        div: 'Rangpur',
        country: 'BAN'
    },

    sub: ['Banglade', 'English', 'math', 'physics'],

    showInformation: function() {
        return `Name :${this.name}\nAge: ${this.age}\nVillage:${this.address.village}\nDistrick: ${this.address.dist} `
    },

}

const { name, ...other } = studnets;
console.log(other);
console.log(name);

const x = [1, 2, 3, 4, 5];
const [a, balance, ...rest] = x;
console.log(balance);
console.log(rest);