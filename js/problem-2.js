/*
২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো। 
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

testTemplateString = `${studnets.name}, ${studnets.address.country} , ${studnets.sub[2]}`;
console.log(testTemplateString);

console.log(studnets.showInformation());