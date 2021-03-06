var express = require('express');
var app = express();

app.listen(8888) // 监听端口

app.get('/getTestData', function(req, res, next) {
  var _callback = req.query.callback;
  var _data = {
    "code": 0,
    "msg": "",
    "data": {
      "reportDate": "2016-06-15",
      "checked": 1,
      "om": {
        "summary": {
          "periodId": "20160615",
          "salesType": "小计",
          "finCode1": "",
          "finName1": "中央",
          "finCode2": "",
          "finName2": "",
          "dayAmt": "3953.39",
          "dayQty": "64005.00",
          "monthAmt": "35376.45",
          "monthAmtAgo": "31930.43",
          "monthAmtYoy": "10.79",
          "monthAmtPlan": "88029.99",
          "monthAmtFin": "40.19",
          "monthQty": "805437.00",
          "monthQtyAgo": "945720.00",
          "monthQtyYoy": "-14.83",
          "monthQtyPlan": "3118847.00",
          "monthQtyFin": "25.82",
          "yearAmt": "439379.02",
          "yearAmtAgo": "431973.31",
          "yearAmtYoy": "1.71",
          "yearAmtPlan": "1004673.93",
          "yearAmtFin": "43.73",
          "yearQty": "13596407.00",
          "yearQtyAgo": "21578444.00",
          "yearQtyYoy": "-36.99",
          "yearQtyPlan": "45781763.00",
          "yearQtyFin": "29.70",
          "monthAmtAvgYoy": "30.09",
          "yearAmtAvgYoy": "61.43",
          "isMaxQtyMFI": 0,
          "isMaxAmtMFI": 0,
          "isMaxAmtYFI": 0,
          "isMaxQtyYFI": 0,
          "isMaxQtyMFO": 0,
          "isMaxAmtMFO": 0,
          "isMaxAmtYFO": 0,
          "isMaxQtyYFO": 0
        },
        "domesticSummary": {
          "periodId": "20160615",
          "salesType": "内销",
          "finCode1": "XJ",
          "finName1": "内销小计",
          "finCode2": "",
          "finName2": "小计",
          "dayAmt": "2745.90",
          "dayQty": "63227.00",
          "monthAmt": "27328.37",
          "monthAmtAgo": "25286.21",
          "monthAmtYoy": "8.08",
          "monthAmtPlan": "68395.18",
          "monthAmtFin": "39.96",
          "monthQty": "692449.00",
          "monthQtyAgo": "459287.00",
          "monthQtyYoy": "50.77",
          "monthQtyPlan": "2723567.00",
          "monthQtyFin": "25.42",
          "yearAmt": "317214.36",
          "yearAmtAgo": "327497.87",
          "yearAmtYoy": "-3.14",
          "yearAmtPlan": "776025.57",
          "yearAmtFin": "40.88",
          "yearQty": "10892003.00",
          "yearQtyAgo": "11909140.00",
          "yearQtyYoy": "-8.54",
          "yearQtyPlan": "31793363.00",
          "yearQtyFin": "34.26",
          "monthAmtAvgYoy": "-28.32",
          "yearAmtAvgYoy": "5.91",
          "isMaxQtyMFI": 0,
          "isMaxAmtMFI": 0,
          "isMaxAmtYFI": 0,
          "isMaxQtyYFI": 0,
          "isMaxQtyMFO": 0,
          "isMaxAmtMFO": 0,
          "isMaxAmtYFO": 0,
          "isMaxQtyYFO": 0
        },
        "reexportSummary": {
          "periodId": "20160615",
          "salesType": "外销",
          "finCode1": "XJ",
          "finName1": "外销小计",
          "finCode2": "",
          "finName2": "小计",
          "dayAmt": "1207.50",
          "dayQty": "778.00",
          "monthAmt": "8048.08",
          "monthAmtAgo": "6644.21",
          "monthAmtYoy": "21.13",
          "monthAmtPlan": "19634.81",
          "monthAmtFin": "40.99",
          "monthQty": "112988.00",
          "monthQtyAgo": "486433.00",
          "monthQtyYoy": "-76.77",
          "monthQtyPlan": "395280.00",
          "monthQtyFin": "28.58",
          "yearAmt": "122164.66",
          "yearAmtAgo": "104475.44",
          "yearAmtYoy": "16.93",
          "yearAmtPlan": "228648.35",
          "yearAmtFin": "53.43",
          "yearQty": "2704404.00",
          "yearQtyAgo": "9669304.00",
          "yearQtyYoy": "-72.03",
          "yearQtyPlan": "13988400.00",
          "yearQtyFin": "19.33",
          "monthAmtAvgYoy": "421.48",
          "yearAmtAvgYoy": "318.08",
          "isMaxQtyMFI": 0,
          "isMaxAmtMFI": 0,
          "isMaxAmtYFI": 0,
          "isMaxQtyYFI": 0,
          "isMaxQtyMFO": 0,
          "isMaxAmtMFO": 0,
          "isMaxAmtYFO": 0,
          "isMaxQtyYFO": 0
        },
        "domestic": [
          {
            "periodId": "20160615",
            "salesType": "内销",
            "finCode1": "-10000",
            "finName1": "中央",
            "finCode2": "-99998",
            "finName2": "零配件",
            "dayAmt": "2695.62",
            "dayQty": "4374.00",
            "monthAmt": "26536.60",
            "monthAmtAgo": "24842.60",
            "monthAmtYoy": "6.82",
            "monthAmtPlan": "65030.77",
            "monthAmtFin": "40.81",
            "monthQty": "30574.00",
            "monthQtyAgo": "43228.00",
            "monthQtyYoy": "-29.27",
            "monthQtyPlan": "320197.00",
            "monthQtyFin": "9.55",
            "yearAmt": "307063.89",
            "yearAmtAgo": "315340.25",
            "yearAmtYoy": "-2.62",
            "yearAmtPlan": "750057.40",
            "yearAmtFin": "40.94",
            "yearQty": "507989.00",
            "yearQtyAgo": "591494.00",
            "yearQtyYoy": "-14.12",
            "yearQtyPlan": "5241646.00",
            "yearQtyFin": "9.69",
            "monthAmtAvgYoy": "51.03",
            "yearAmtAvgYoy": "13.38",
            "isMaxQtyMFI": 0,
            "isMaxAmtMFI": 0,
            "isMaxAmtYFI": 0,
            "isMaxQtyYFI": 0,
            "isMaxQtyMFO": 0,
            "isMaxAmtMFO": 0,
            "isMaxAmtYFO": 0,
            "isMaxQtyYFO": 0
          },
          {
            "periodId": "20160615",
            "salesType": "内销",
            "finCode1": "",
            "finName1": "其中：<br/>离心螺杆",
            "finCode2": "14",
            "finName2": "螺杆机",
            "dayAmt": "9.01",
            "dayQty": "1.00",
            "monthAmt": "1384.85",
            "monthAmtAgo": "873.79",
            "monthAmtYoy": "58.49",
            "monthAmtPlan": "2975.07",
            "monthAmtFin": "46.55",
            "monthQty": "43.00",
            "monthQtyAgo": "43.00",
            "monthQtyYoy": "0.00",
            "monthQtyPlan": "97.00",
            "monthQtyFin": "44.33",
            "yearAmt": "10586.53",
            "yearAmtAgo": "9258.11",
            "yearAmtYoy": "14.35",
            "yearAmtPlan": "27113.23",
            "yearAmtFin": "39.05",
            "yearQty": "459.00",
            "yearQtyAgo": "354.00",
            "yearQtyYoy": "29.66",
            "yearQtyPlan": "1213.00",
            "yearQtyFin": "37.84",
            "monthAmtAvgYoy": "58.49",
            "yearAmtAvgYoy": "-11.81",
            "isMaxQtyMFI": 0,
            "isMaxAmtMFI": 0,
            "isMaxAmtYFI": 0,
            "isMaxQtyYFI": 0,
            "isMaxQtyMFO": 0,
            "isMaxAmtMFO": 0,
            "isMaxAmtYFO": 0,
            "isMaxQtyYFO": 0
          },
          {
            "periodId": "20160615",
            "salesType": "内销",
            "finCode1": "604",
            "finName1": "照明 ",
            "finCode2": "10",
            "finName2": "照明",
            "dayAmt": "50.28",
            "dayQty": "58853.00",
            "monthAmt": "791.77",
            "monthAmtAgo": "443.61",
            "monthAmtYoy": "78.48",
            "monthAmtPlan": "3364.41",
            "monthAmtFin": "23.53",
            "monthQty": "661875.00",
            "monthQtyAgo": "416059.00",
            "monthQtyYoy": "59.08",
            "monthQtyPlan": "2403370.00",
            "monthQtyFin": "27.54",
            "yearAmt": "10150.47",
            "yearAmtAgo": "12157.61",
            "yearAmtYoy": "-16.51",
            "yearAmtPlan": "25968.17",
            "yearAmtFin": "39.09",
            "yearQty": "10384014.00",
            "yearQtyAgo": "11317646.00",
            "yearQtyYoy": "-8.25",
            "yearQtyPlan": "26551717.00",
            "yearQtyFin": "39.11",
            "monthAmtAvgYoy": "12.19",
            "yearAmtAvgYoy": "-9.00",
            "isMaxQtyMFI": 0,
            "isMaxAmtMFI": 0,
            "isMaxAmtYFI": 0,
            "isMaxQtyYFI": 0,
            "isMaxQtyMFO": 0,
            "isMaxAmtMFO": 0,
            "isMaxAmtYFO": 0,
            "isMaxQtyYFO": 0
          },
          {
            "periodId": "20160615",
            "salesType": "内销",
            "finCode1": "XJ",
            "finName1": "内销小计",
            "finCode2": "",
            "finName2": "小计",
            "dayAmt": "2745.90",
            "dayQty": "63227.00",
            "monthAmt": "27328.37",
            "monthAmtAgo": "25286.21",
            "monthAmtYoy": "8.08",
            "monthAmtPlan": "68395.18",
            "monthAmtFin": "39.96",
            "monthQty": "692449.00",
            "monthQtyAgo": "459287.00",
            "monthQtyYoy": "50.77",
            "monthQtyPlan": "2723567.00",
            "monthQtyFin": "25.42",
            "yearAmt": "317214.36",
            "yearAmtAgo": "327497.87",
            "yearAmtYoy": "-3.14",
            "yearAmtPlan": "776025.57",
            "yearAmtFin": "40.88",
            "yearQty": "10892003.00",
            "yearQtyAgo": "11909140.00",
            "yearQtyYoy": "-8.54",
            "yearQtyPlan": "31793363.00",
            "yearQtyFin": "34.26",
            "monthAmtAvgYoy": "-28.32",
            "yearAmtAvgYoy": "5.91",
            "isMaxQtyMFI": 0,
            "isMaxAmtMFI": 0,
            "isMaxAmtYFI": 0,
            "isMaxQtyYFI": 0,
            "isMaxQtyMFO": 0,
            "isMaxAmtMFO": 0,
            "isMaxAmtYFO": 0,
            "isMaxQtyYFO": 0
          }
        ],
        "reexport": [
          {
            "periodId": "20160615",
            "salesType": "外销",
            "finCode1": "-10000",
            "finName1": "中央",
            "finCode2": "-99998",
            "finName2": "零配件",
            "dayAmt": "1207.50",
            "dayQty": "778.00",
            "monthAmt": "7926.11",
            "monthAmtAgo": "6294.47",
            "monthAmtYoy": "25.92",
            "monthAmtPlan": "18499.56",
            "monthAmtFin": "42.84",
            "monthQty": "5957.00",
            "monthQtyAgo": "3347.00",
            "monthQtyYoy": "77.98",
            "monthQtyPlan": "74197.00",
            "monthQtyFin": "8.03",
            "yearAmt": "119003.13",
            "yearAmtAgo": "97416.10",
            "yearAmtYoy": "22.16",
            "yearAmtPlan": "214806.32",
            "yearAmtFin": "55.40",
            "yearQty": "104578.00",
            "yearQtyAgo": "196641.00",
            "yearQtyYoy": "-46.82",
            "yearQtyPlan": "809259.00",
            "yearQtyFin": "12.92",
            "monthAmtAvgYoy": "-29.25",
            "yearAmtAvgYoy": "129.70",
            "isMaxQtyMFI": 0,
            "isMaxAmtMFI": 0,
            "isMaxAmtYFI": 0,
            "isMaxQtyYFI": 0,
            "isMaxQtyMFO": 0,
            "isMaxAmtMFO": 0,
            "isMaxAmtYFO": 0,
            "isMaxQtyYFO": 0
          },
          {
            "periodId": "20160615",
            "salesType": "外销",
            "finCode1": "",
            "finName1": "其中：<br/>离心螺杆",
            "finCode2": "14",
            "finName2": "螺杆机",
            "dayAmt": "120.25",
            "dayQty": "4.00",
            "monthAmt": "245.54",
            "monthAmtAgo": "0.00",
            "monthAmtYoy": "-",
            "monthAmtPlan": "128.64",
            "monthAmtFin": "190.87",
            "monthQty": "8.00",
            "monthQtyAgo": "0.00",
            "monthQtyYoy": "-",
            "monthQtyPlan": "10.00",
            "monthQtyFin": "80.00",
            "yearAmt": "1347.72",
            "yearAmtAgo": "2589.75",
            "yearAmtYoy": "-47.96",
            "yearAmtPlan": "4311.57",
            "yearAmtFin": "31.26",
            "yearQty": "63.00",
            "yearQtyAgo": "87.00",
            "yearQtyYoy": "-27.59",
            "yearQtyPlan": "148.00",
            "yearQtyFin": "42.57",
            "monthAmtAvgYoy": "-",
            "yearAmtAvgYoy": "-28.13",
            "isMaxQtyMFI": 0,
            "isMaxAmtMFI": 0,
            "isMaxAmtYFI": 0,
            "isMaxQtyYFI": 0,
            "isMaxQtyMFO": 0,
            "isMaxAmtMFO": 0,
            "isMaxAmtYFO": 0,
            "isMaxQtyYFO": 0
          },
          {
            "periodId": "20160615",
            "salesType": "外销",
            "finCode1": "604",
            "finName1": "照明 ",
            "finCode2": "10",
            "finName2": "照明",
            "dayAmt": "0.00",
            "dayQty": "0.00",
            "monthAmt": "121.97",
            "monthAmtAgo": "349.74",
            "monthAmtYoy": "-65.13",
            "monthAmtPlan": "1135.25",
            "monthAmtFin": "10.74",
            "monthQty": "107031.00",
            "monthQtyAgo": "483086.00",
            "monthQtyYoy": "-77.84",
            "monthQtyPlan": "321083.00",
            "monthQtyFin": "33.33",
            "yearAmt": "3161.53",
            "yearAmtAgo": "7059.34",
            "yearAmtYoy": "-55.22",
            "yearAmtPlan": "13842.04",
            "yearAmtFin": "22.84",
            "yearQty": "2599826.00",
            "yearQtyAgo": "9472663.00",
            "yearQtyYoy": "-72.55",
            "yearQtyPlan": "13179141.00",
            "yearQtyFin": "19.73",
            "monthAmtAvgYoy": "57.40",
            "yearAmtAvgYoy": "63.18",
            "isMaxQtyMFI": 0,
            "isMaxAmtMFI": 0,
            "isMaxAmtYFI": 0,
            "isMaxQtyYFI": 0,
            "isMaxQtyMFO": 0,
            "isMaxAmtMFO": 0,
            "isMaxAmtYFO": 0,
            "isMaxQtyYFO": 0
          },
          {
            "periodId": "20160615",
            "salesType": "外销",
            "finCode1": "XJ",
            "finName1": "外销小计",
            "finCode2": "",
            "finName2": "小计",
            "dayAmt": "1207.50",
            "dayQty": "778.00",
            "monthAmt": "8048.08",
            "monthAmtAgo": "6644.21",
            "monthAmtYoy": "21.13",
            "monthAmtPlan": "19634.81",
            "monthAmtFin": "40.99",
            "monthQty": "112988.00",
            "monthQtyAgo": "486433.00",
            "monthQtyYoy": "-76.77",
            "monthQtyPlan": "395280.00",
            "monthQtyFin": "28.58",
            "yearAmt": "122164.66",
            "yearAmtAgo": "104475.44",
            "yearAmtYoy": "16.93",
            "yearAmtPlan": "228648.35",
            "yearAmtFin": "53.43",
            "yearQty": "2704404.00",
            "yearQtyAgo": "9669304.00",
            "yearQtyYoy": "-72.03",
            "yearQtyPlan": "13988400.00",
            "yearQtyFin": "19.33",
            "monthAmtAvgYoy": "421.48",
            "yearAmtAvgYoy": "318.08",
            "isMaxQtyMFI": 0,
            "isMaxAmtMFI": 0,
            "isMaxAmtYFI": 0,
            "isMaxQtyYFI": 0,
            "isMaxQtyMFO": 0,
            "isMaxAmtMFO": 0,
            "isMaxAmtYFO": 0,
            "isMaxQtyYFO": 0
          }
        ]
      },
      "cash": {
        "summary": {
          "periodId": "20160615",
          "salesType": "小计",
          "finCode1": "",
          "finName1": "",
          "finCode2": "",
          "finName2": "",
          "dayAmt": "9732.00",
          "monthAmt": "44878.98",
          "monthAgo": "27940.09",
          "monthFinRate": "44.44",
          "monthYoy": "60.63",
          "monthAmtPlan": "100989.47",
          "yearAmt": "473298.70",
          "yearAgo": "451060.28",
          "yearFinRate": "42.22",
          "yearYoy": "4.93",
          "yearAmtPlan": "1121068.00",
          "isMaxAmtMFI": 0,
          "isMaxAmtYFI": 0,
          "isMaxAmtMFO": 0,
          "isMaxAmtYFO": 0
        },
        "domestic": [
          {
            "periodId": "20160615",
            "salesType": "内销",
            "finCode1": "XJ",
            "finName1": "小计",
            "finCode2": "",
            "finName2": "",
            "dayAmt": "9035.00",
            "monthAmt": "33104.11",
            "monthAgo": "18363.58",
            "monthFinRate": "42.44",
            "monthYoy": "80.27",
            "monthAmtPlan": "78000.00",
            "yearAmt": "368256.73",
            "yearAgo": "353094.43",
            "yearFinRate": "40.70",
            "yearYoy": "4.29",
            "yearAmtPlan": "904908.00",
            "isMaxAmtMFI": 0,
            "isMaxAmtYFI": 0,
            "isMaxAmtMFO": 0,
            "isMaxAmtYFO": 0
          },
          {
            "periodId": "20160615",
            "salesType": "内销",
            "finCode1": "FIN040101",
            "finName1": "现汇",
            "finCode2": "",
            "finName2": "",
            "dayAmt": "4434.00",
            "monthAmt": "15285.11",
            "monthAgo": "7645.45",
            "monthFinRate": "43.61",
            "monthYoy": "99.92",
            "monthAmtPlan": "35050.00",
            "yearAmt": "167428.81",
            "yearAgo": "176698.61",
            "yearFinRate": "48.32",
            "yearYoy": "-5.25",
            "yearAmtPlan": "346483.04",
            "isMaxAmtMFI": 0,
            "isMaxAmtYFI": 0,
            "isMaxAmtMFO": 0,
            "isMaxAmtYFO": 0
          },
          {
            "periodId": "20160615",
            "salesType": "内销",
            "finCode1": "FIN040102",
            "finName1": "承兑汇票",
            "finCode2": "",
            "finName2": "",
            "dayAmt": "0.00",
            "monthAmt": "0.00",
            "monthAgo": "12009.58",
            "monthFinRate": "0.00",
            "monthYoy": "-100.00",
            "monthAmtPlan": "42700.00",
            "yearAmt": "0.00",
            "yearAgo": "181137.48",
            "yearFinRate": "0.00",
            "yearYoy": "-100.00",
            "yearAmtPlan": "504130.48",
            "isMaxAmtMFI": 0,
            "isMaxAmtYFI": 0,
            "isMaxAmtMFO": 0,
            "isMaxAmtYFO": 0
          },
          {
            "periodId": "20160615",
            "salesType": "内销",
            "finCode1": "FIN040102",
            "finName1": "电子承兑汇票",
            "finCode2": "",
            "finName2": "",
            "dayAmt": "4481.00",
            "monthAmt": "17033.87",
            "monthAgo": "0.00",
            "monthFinRate": "-",
            "monthYoy": "-",
            "monthAmtPlan": "0.00",
            "yearAmt": "173685.53",
            "yearAgo": "0.00",
            "yearFinRate": "-",
            "yearYoy": "-",
            "yearAmtPlan": "0.00",
            "isMaxAmtMFI": 0,
            "isMaxAmtYFI": 0,
            "isMaxAmtMFO": 0,
            "isMaxAmtYFO": 0
          },
          {
            "periodId": "20160615",
            "salesType": "内销",
            "finCode1": "FIN040102",
            "finName1": "纸质承兑汇票",
            "finCode2": "",
            "finName2": "",
            "dayAmt": "120.00",
            "monthAmt": "1428.09",
            "monthAgo": "0.00",
            "monthFinRate": "-",
            "monthYoy": "-",
            "monthAmtPlan": "0.00",
            "yearAmt": "33764.31",
            "yearAgo": "0.00",
            "yearFinRate": "-",
            "yearYoy": "-",
            "yearAmtPlan": "0.00",
            "isMaxAmtMFI": 0,
            "isMaxAmtYFI": 0,
            "isMaxAmtMFO": 0,
            "isMaxAmtYFO": 0
          },
          {
            "periodId": "20160615",
            "salesType": "内销",
            "finCode1": "FIN040104",
            "finName1": "转到款",
            "finCode2": "",
            "finName2": "",
            "dayAmt": "0.00",
            "monthAmt": "-25.12",
            "monthAgo": "-1291.46",
            "monthFinRate": "-10.05",
            "monthYoy": "-98.05",
            "monthAmtPlan": "250.00",
            "yearAmt": "-714.49",
            "yearAgo": "-4741.66",
            "yearFinRate": "-7.24",
            "yearYoy": "-84.93",
            "yearAmtPlan": "9870.42",
            "isMaxAmtMFI": 0,
            "isMaxAmtYFI": 0,
            "isMaxAmtMFO": 0,
            "isMaxAmtYFO": 0
          },
          {
            "periodId": "20160615",
            "salesType": "内销",
            "finCode1": "FIN040105",
            "finName1": "退款",
            "finCode2": "",
            "finName2": "",
            "dayAmt": "0.00",
            "monthAmt": "-617.84",
            "monthAgo": "0.00",
            "monthFinRate": "-",
            "monthYoy": "-",
            "monthAmtPlan": "0.00",
            "yearAmt": "-5907.44",
            "yearAgo": "0.00",
            "yearFinRate": "-13.30",
            "yearYoy": "-",
            "yearAmtPlan": "44424.06",
            "isMaxAmtMFI": 0,
            "isMaxAmtYFI": 0,
            "isMaxAmtMFO": 0,
            "isMaxAmtYFO": 0
          },
          {
            "periodId": "20160615",
            "salesType": "内销",
            "finCode1": "FIN040121",
            "finName1": "正常回款",
            "finCode2": "",
            "finName2": "",
            "dayAmt": "0.00",
            "monthAmt": "0.00",
            "monthAgo": "0.00",
            "monthFinRate": "-",
            "monthYoy": "-",
            "monthAmtPlan": "0.00",
            "yearAmt": "0.00",
            "yearAgo": "0.00",
            "yearFinRate": "-",
            "yearYoy": "-",
            "yearAmtPlan": "0.00",
            "isMaxAmtMFI": 0,
            "isMaxAmtYFI": 0,
            "isMaxAmtMFO": 0,
            "isMaxAmtYFO": 0
          }
        ],
        "reexport": [
          {
            "periodId": "20160615",
            "salesType": "外销",
            "finCode1": "XJ",
            "finName1": "小计",
            "finCode2": "",
            "finName2": "",
            "dayAmt": "697.00",
            "monthAmt": "11774.87",
            "monthAgo": "9576.52",
            "monthFinRate": "51.22",
            "monthYoy": "22.96",
            "monthAmtPlan": "22989.47",
            "yearAmt": "105041.97",
            "yearAgo": "97965.85",
            "yearFinRate": "48.59",
            "yearYoy": "7.22",
            "yearAmtPlan": "216160.00",
            "isMaxAmtMFI": 0,
            "isMaxAmtYFI": 0,
            "isMaxAmtMFO": 0,
            "isMaxAmtYFO": 0
          },
          {
            "periodId": "20160615",
            "salesType": "外销",
            "finCode1": "FIN040121",
            "finName1": "正常回款",
            "finCode2": "",
            "finName2": "",
            "dayAmt": "697.00",
            "monthAmt": "11635.51",
            "monthAgo": "9541.77",
            "monthFinRate": "-",
            "monthYoy": "21.94",
            "monthAmtPlan": "0.00",
            "yearAmt": "100918.99",
            "yearAgo": "95713.62",
            "yearFinRate": "3669.78",
            "yearYoy": "5.44",
            "yearAmtPlan": "2750.00",
            "isMaxAmtMFI": 0,
            "isMaxAmtYFI": 0,
            "isMaxAmtMFO": 0,
            "isMaxAmtYFO": 0
          },
          {
            "periodId": "20160615",
            "salesType": "外销",
            "finCode1": "FIN040123",
            "finName1": "中转到款",
            "finCode2": "",
            "finName2": "",
            "dayAmt": "0.00",
            "monthAmt": "0.00",
            "monthAgo": "0.00",
            "monthFinRate": "-",
            "monthYoy": "-",
            "monthAmtPlan": "0.00",
            "yearAmt": "0.00",
            "yearAgo": "799.26",
            "yearFinRate": "0.00",
            "yearYoy": "-100.00",
            "yearAmtPlan": "2100.00",
            "isMaxAmtMFI": 0,
            "isMaxAmtYFI": 0,
            "isMaxAmtMFO": 0,
            "isMaxAmtYFO": 0
          },
          {
            "periodId": "20160615",
            "salesType": "外销",
            "finCode1": "FIN040124",
            "finName1": "融资还款",
            "finCode2": "",
            "finName2": "",
            "dayAmt": "0.00",
            "monthAmt": "0.00",
            "monthAgo": "0.00",
            "monthFinRate": "0.00",
            "monthYoy": "-",
            "monthAmtPlan": "-1679.21",
            "yearAmt": "0.00",
            "yearAgo": "0.00",
            "yearFinRate": "0.00",
            "yearYoy": "-",
            "yearAmtPlan": "-18016.00",
            "isMaxAmtMFI": 0,
            "isMaxAmtYFI": 0,
            "isMaxAmtMFO": 0,
            "isMaxAmtYFO": 0
          },
          {
            "periodId": "20160615",
            "salesType": "外销",
            "finCode1": "FIN040125",
            "finName1": "退款",
            "finCode2": "",
            "finName2": "",
            "dayAmt": "0.00",
            "monthAmt": "0.00",
            "monthAgo": "0.00",
            "monthFinRate": "-",
            "monthYoy": "-",
            "monthAmtPlan": "0.00",
            "yearAmt": "0.00",
            "yearAgo": "0.00",
            "yearFinRate": "0.00",
            "yearYoy": "-",
            "yearAmtPlan": "1100.00",
            "isMaxAmtMFI": 0,
            "isMaxAmtYFI": 0,
            "isMaxAmtMFO": 0,
            "isMaxAmtYFO": 0
          },
          {
            "periodId": "20160615",
            "salesType": "外销",
            "finCode1": "FIN040127",
            "finName1": "LC",
            "finCode2": "",
            "finName2": "",
            "dayAmt": "0.00",
            "monthAmt": "0.00",
            "monthAgo": "0.00",
            "monthFinRate": "0.00",
            "monthYoy": "-",
            "monthAmtPlan": "1633.56",
            "yearAmt": "0.00",
            "yearAgo": "0.00",
            "yearFinRate": "0.00",
            "yearYoy": "-",
            "yearAmtPlan": "42313.60",
            "isMaxAmtMFI": 0,
            "isMaxAmtYFI": 0,
            "isMaxAmtMFO": 0,
            "isMaxAmtYFO": 0
          },
          {
            "periodId": "20160615",
            "salesType": "外销",
            "finCode1": "FIN040128",
            "finName1": "TT",
            "finCode2": "",
            "finName2": "",
            "dayAmt": "0.00",
            "monthAmt": "0.00",
            "monthAgo": "0.00",
            "monthFinRate": "0.00",
            "monthYoy": "-",
            "monthAmtPlan": "12417.41",
            "yearAmt": "0.00",
            "yearAgo": "0.00",
            "yearFinRate": "0.00",
            "yearYoy": "-",
            "yearAmtPlan": "136686.16",
            "isMaxAmtMFI": 0,
            "isMaxAmtYFI": 0,
            "isMaxAmtMFO": 0,
            "isMaxAmtYFO": 0
          },
          {
            "periodId": "20160615",
            "salesType": "外销",
            "finCode1": "FIN040129",
            "finName1": "OA",
            "finCode2": "",
            "finName2": "",
            "dayAmt": "0.00",
            "monthAmt": "0.00",
            "monthAgo": "0.00",
            "monthFinRate": "0.00",
            "monthYoy": "-",
            "monthAmtPlan": "4805.06",
            "yearAmt": "0.00",
            "yearAgo": "0.00",
            "yearFinRate": "0.00",
            "yearYoy": "-",
            "yearAmtPlan": "30026.24",
            "isMaxAmtMFI": 0,
            "isMaxAmtYFI": 0,
            "isMaxAmtMFO": 0,
            "isMaxAmtYFO": 0
          },
          {
            "periodId": "20160615",
            "salesType": "外销",
            "finCode1": "FIN040130",
            "finName1": "其他",
            "finCode2": "",
            "finName2": "",
            "dayAmt": "0.00",
            "monthAmt": "0.00",
            "monthAgo": "0.00",
            "monthFinRate": "-",
            "monthYoy": "-",
            "monthAmtPlan": "0.00",
            "yearAmt": "0.00",
            "yearAgo": "20.14",
            "yearFinRate": "-",
            "yearYoy": "-100.00",
            "yearAmtPlan": "0.00",
            "isMaxAmtMFI": 0,
            "isMaxAmtYFI": 0,
            "isMaxAmtMFO": 0,
            "isMaxAmtYFO": 0
          },
          {
            "periodId": "20160615",
            "salesType": "外销",
            "finCode1": "FIN040131",
            "finName1": "买断融资",
            "finCode2": "",
            "finName2": "",
            "dayAmt": "0.00",
            "monthAmt": "139.36",
            "monthAgo": "34.75",
            "monthFinRate": "2.40",
            "monthYoy": "301.02",
            "monthAmtPlan": "5812.65",
            "yearAmt": "4122.98",
            "yearAgo": "1432.84",
            "yearFinRate": "21.47",
            "yearYoy": "187.75",
            "yearAmtPlan": "19200.00",
            "isMaxAmtMFI": 0,
            "isMaxAmtYFI": 0,
            "isMaxAmtMFO": 0,
            "isMaxAmtYFO": 0
          }
        ]
      },
      "inv": {
        "materials": [
          {
            "accountName": null,
            "directCode": null,
            "directName": null,
            "organizationCode": "XJ",
            "organizationName": "小计",
            "finCode": null,
            "finName": null,
            "finCode1": null,
            "finName1": null,
            "ptdQty": null,
            "ptdAmt": null,
            "lastPtdQty": null,
            "lastPtdAmt": null,
            "lastMtdQty": null,
            "lastMtdAmt": null,
            "agoPtdQty": null,
            "agoPtdAmt": null,
            "lastMtdQtyRate": "-",
            "lastMtdAmtRate": "-",
            "agoPtdQtyRate": "-",
            "agoPtdAmtRate": "-",
            "ptdAmtDull": null,
            "badPtdAmt": null
          }
        ],
        "finishDomestic": [],
        "finishReexport": [],
        "materialsLineChart": {
          "legend": [
            "2017年",
            "2016年"
          ],
          "data": [
            [
              "5241.14",
              "5081.59",
              "5534.18",
              "3943.43",
              "3646.02",
              "5213.93",
              "4912.39",
              "2654.67",
              "3803.97",
              "4971.44",
              null,
              null
            ],
            [
              "44209.83",
              "50698.61",
              "40248.56",
              "30799.34",
              "44812.11",
              "52773.29",
              "57883.06",
              "50455.94",
              "46312.91",
              "46887.72",
              "42478.20",
              null
            ]
          ]
        },
        "finishDomesticLineChart": {
          "legend": [
            "2017年",
            "2016年"
          ],
          "data": [
            [
              "20296.10",
              "35578.87",
              "43876.01",
              "47402.57",
              null,
              "32218.37",
              "40570.39",
              "30418.75",
              "20296.10",
              "35578.87",
              "43876.01",
              null,
              null
            ],
            [
              "32218.37",
              "40570.39",
              "30418.75",
              "20296.10",
              "35578.87",
              "43876.01",
              "47402.57",
              "40320.28",
              "38493.42",
              "36759.74",
              "28747.46",
              null
            ]
          ]
        },
        "finishReexportLineChart": {
          "legend": [
            "2017年",
            "2016年"
          ],
          "data": [
            [
              "5241.14",
              "5081.59",
              "5534.18",
              "3943.43",
              "3646.02",
              "5213.93",
              "4912.39",
              "2654.67",
              "3803.97",
              "4971.44",
              null,
              null
            ],
            [
              "7111.31",
              "5241.14",
              "5081.59",
              "5534.18",
              "3943.43",
              "3646.02",
              "5213.93",
              "4912.39",
              "2654.67",
              "3803.97",
              "4971.44",
              null
            ]
          ]
        }
      },
      "receiv": {
        "summary": {
          "totalAmt": "37681.37",
          "domesticAmt": "3857.92",
          "reexportAmt": "33823.45",
          "domesticAgoAmt": "4717.80",
          "reexportAgoAmt": "29567.26",
          "over30dTotalAmt": "1732.90",
          "over30dDomesticAmt": "719.62",
          "over30dReexportAmt": "1013.28"
        },
        "domestic": [
          {
            "directCode": "DOMESTIC",
            "directName": "内销",
            "accountType": "外部应收",
            "over30dAmt": "719.62",
            "lastPtdAmt": "5502.59",
            "ptdAmt": "3857.92",
            "lastMtdAmt": "1343.70",
            "monthRate": "187.11",
            "agoPtdAmt": "4717.80",
            "dayAmtYoy": "-18.23"
          },
          {
            "directCode": "DOMESTIC",
            "directName": "内销",
            "accountType": "其中：逾期",
            "over30dAmt": "719.62",
            "lastPtdAmt": "885.61",
            "ptdAmt": "885.64",
            "lastMtdAmt": "444.10",
            "monthRate": "99.42",
            "agoPtdAmt": "3405.98",
            "dayAmtYoy": "-74.00"
          }
        ],
        "reexport": [
          {
            "directCode": "REEXPORT",
            "directName": "外销",
            "accountType": "外部应收",
            "over30dAmt": "1013.28",
            "lastPtdAmt": "33701.89",
            "ptdAmt": "33823.45",
            "lastMtdAmt": "36263.13",
            "monthRate": "-6.73",
            "agoPtdAmt": "29567.26",
            "dayAmtYoy": "14.39"
          },
          {
            "directCode": "REEXPORT",
            "directName": "外销",
            "accountType": "其中：逾期",
            "over30dAmt": "1013.28",
            "lastPtdAmt": "1960.04",
            "ptdAmt": "1839.48",
            "lastMtdAmt": "1465.96",
            "monthRate": "25.48",
            "agoPtdAmt": "2881.55",
            "dayAmtYoy": "-36.16"
          }
        ],
        "total": {
          "directCode": "HJ",
          "directName": "合计",
          "accountType": "合计",
          "over30dAmt": "1732.90",
          "lastPtdAmt": "39204.47",
          "ptdAmt": "37681.37",
          "lastMtdAmt": "37606.82",
          "monthRate": "0.20",
          "agoPtdAmt": "34285.06",
          "dayAmtYoy": "9.91"
        }
      }
    }
  };
  res.type('text/javascript'); // 设置返回类型为 JavaScript
  res.send(_callback + '(' + JSON.stringify(_data) + ')'); // 返回 jsonp 的数据
});
