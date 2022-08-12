exports.get_list = (req, res) => {
    const data = [
        {
            "id": 2,
            "name": "demo api"
        },
        {
            "id": 3,
            "name": "demo api"
        },
        {
            "id": 4,
            "name": "demo api"
        }
    ]
    res.send({
        result: data
    })
}

exports.detail = (req, res) => {
    const data = {
        "id": req.params.id,
        "name": "demo detail"
    }
    res.send({
        result: data
    })
}
