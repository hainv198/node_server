exports.api = (req, res) => {
    const data = [
        {
            "id": 1,
            "name": "demo api"
        },
        {
            "id": 1,
            "name": "demo api"
        },
        {
            "id": 1,
            "name": "demo api"
        }
    ]
    res.send({
        api: data
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
