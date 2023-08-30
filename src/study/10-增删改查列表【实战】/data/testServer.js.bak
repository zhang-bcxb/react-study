const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json())
let userArr = ['张三', '李四', '王五', '马六']
let arr = [];
for (let i = 0; i < Math.floor(Math.random() * 100, 2) + 100; i++) {
    arr.push({
        id: "0000" + i,
        date: "2023-05-" + Math.floor(Math.random() * 30 + 1),
        no: "YF000" + Math.floor(Math.random() * 99999),
        name: "订单" + i,
        //0-进行中 1-已完成 2-已延期
        status: Math.floor(Math.random() * 3),
        user: userArr[Math.floor(Math.random() * 4)],
        price: Math.floor(Math.random() * 9999999)
    })
}
app.get("/list", (req, res) => {
    let page = req.query.page || 1;
    let pageSize = req.query.pageSize || 10;
    let user = req.query.user || undefined;
    let date = req.query.date || undefined;
    let no = req.query.no || undefined;
    let status = req.query.status || undefined;
    let _finnalArr = [...arr];
    if (user) {
        _finnalArr = _finnalArr.filter((item) => {
            if (item.user == user) {
                return item;
            }
        })
    }

    if (date) {
        _finnalArr = _finnalArr.filter((item) => {
            if (item.date == date) {
                return item;
            }
        })
    }
    if (no) {
        _finnalArr = _finnalArr.filter((item) => {
            if (item.no == no) {
                return item;
            }
        })
    }
    if (status) {
        _finnalArr = _finnalArr.filter((item) => {
            if (item.status == status) {
                return item;
            }
        })
    }
    let _start = (page - 1) * pageSize;
    let _end = _start + (pageSize - 0)

    res.json({
        code: 200,
        mes: "成功",
        data: _finnalArr.slice(_start, _end),
        total: _finnalArr.length
    })
})
app.post("/deleteOrder", (req, res) => {
    let id = req.body.id;
    arr = arr.filter((item) => {
        if (item.id !== id) {
            return item;
        }
    })
    res.json({
        code: 200,
        mes: "删除成功"
    })
})
app.post("/deleteMany", (req, res) => {
    let ids = req.body.ids;
    let idArr = ids.split(",");
    idArr.forEach((id) => {
        arr = arr.filter((item) => {
            if (item.id !== id) {
                return item;
            }
        })
    })
    res.json({
        code: 200,
        mes: "删除成功"
    })
})
app.post("/updateOrder", (req, res) => {
    let id = req.body.id;
    let date = req.body.date;
    let name = req.body.name;
    let user = req.body.user;
    let status = req.body.status;
    arr.forEach((item, index) => {
        if (item.id === id) {
            arr[index].date = date;
            arr[index].name = name;
            arr[index].user = user;
            arr[index].status = status;
        }
    })
    res.json({
        code: 200,
        mes: "修改成功"
    })
})
app.post("/addOrder", (req, res) => {
    arr.push({
        id: "0000" + arr.length + 1,
        date: req.body.date,
        no: "YF000" + Math.floor(Math.random() * 99999),
        name: req.body.name,
        user: req.body.user,
        price: req.body.price,
        status: req.body.status
    })
    res.json({
        code: 200,
        mes: "增加成功"
    })
})
app.listen(8000)
