// const express = require('express');

// function createRouter(db) {
//   const router = express.Router();

//   router.get('/products/:type', function (req, res, next) {
//     db.query(
//       `SELECT * FROM testdb.angular WHERE type=?`,
//       [req.params.type],
//       (error, results) => {
//         if (error) {
//           console.log(error);
//           res.status(500).json({status: 'error'});
//         } else {
//           res.status(200).json(results);
//         }
//       }
//     );
//   });
//   router.post('/add-product/', function (req, res, next) {
//     db.query(
//       'INSERT INTO testdb.angular (title, price, type, quantity) VALUES (?,?,?,?)',
//       [req.body.title, req.body.price, req.body.type, 1],
//       (error, results) => {
//         if (error) {
//           console.log(error);
//           res.status(500).json({status: 'error'});
//         } else {
//           res.status(200).json(results);
//         }
//       }
//     );
//   });
//   return router;
// }

// module.exports = createRouter;