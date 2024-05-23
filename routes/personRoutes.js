const express=require("express")
const router =express()

router.get("/get", getPerson)
router.post("/post", createPerson)
router.put("/put/:id", updatePerson)
router.delete("/delete/:id", deletePerson)

module.exports=router
