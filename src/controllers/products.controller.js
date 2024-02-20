import productDAO from "../dao/products.dao.js";

export const getAll = (req, res) => {
    productDAO.getAll()
        .then(products => res.render('../src/views/index',{ products }))
        .catch(err => res.json({
            status: "Server Unavailable"
        }));
}
    
export const getOne = (req, res) => {
    const barcode = req.params.barcode;
    productDAO.getOne(barcode)
        .then(product => {
            !product ? res.json({
                 message: "Product not found" 
                }) : res.render('../src/views/edit', {product});
        })
        .catch(err => res.json({
            status: "Server Unavailable"
        }));
};


export const insertOne = (req, res) => {
    productDAO.insertOne(req.body)
        .then(result => res.redirect('/'))
        .catch(err => {
            console.error(err);
            res.status(500).json({ status: 'Error en el servidor' });
        });
  };


  export const updateOne = (req, res) => {
    productDAO
      .updateOne(req.params.barcode, req.body)
      .then((product) => {
        !product
          ? res.console({
              message: "product not found",
            })
          : res.redirect("/");
      })
      .catch((err) => res.console({ status: "Server unavaliable"}));
  };

export const deleteOne = (req, res) => {
    productDAO
        .deleteOne(req.params.barcode)
        .then((product) => {
            !product
                ? res.json({
                    message: "product not found"
                })
            : res.redirect("/");
        })
    .catch(err=>res.json({status: "Servidor no responde"}));
}
