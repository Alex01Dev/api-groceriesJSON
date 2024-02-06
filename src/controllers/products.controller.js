import productDAO from "../dao/products.dao.js";

export const getAll = (req,res) =>{

    productDAO.getAll()
    .then(result=> res.json(result))
    .catch(err=>res.json({
        status: "Server Unavailable"
    }));
}

export const getOne = (req, res) => {
    const barcode = req.params.barcode;
    productDAO.getOne(barcode)
        .then(result => {
            !result ? res.json({ message: "Product not found" }) : res.json(result);
        })
        .catch(err => res.json({
            status: "Server Unavailable"
        }));
};


export const insertOne = (req, res) => {
    productDAO.insertOne(req.body)
        .then(result => {
            res.json(!result ? { status: 'No se guardo el producto' } : { estatus: 'Producto insertado', product: result });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ status: 'Error en el servidor' });
        });
  };


export const updateOne = (req, res) => {
    productDAO.updateOne(req.params.barcode,req.body)
    .then(result=>res.json({status: "Product Updated"}))
    .catch(err=>res.json({status: "Server Unavaible"}));
}

export const deleteOne = (req, res) => {
    productDAO.deleteOne(req.params.barcode)
    .then(result=>res.json({status: "Boleto Borrado" }))
    .catch(err=>res.json({status: "Servidor no responde"}));
}
