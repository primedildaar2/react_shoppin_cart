import {Row,Col} from "react-bootstrap";
import storeItems from "../data/items.json";
export function Store(){
    return(
        <>
        <h1 style={{marginBottom:"100px",marginTop:"50px",}}>Store</h1>
        <div>
            <Row md={2} xs={1} lg={3} className="g-3">
                {storeItems.map((itemDetail) =>(
                    <Col>
                        <div style={{backgroundColor:"silver", height:"initial",width:"149px"}}>
                            <img style={{height:"150px",width:"150px"}} src={itemDetail.imgUrl} alt={itemDetail.id.toString()} />
                            <h1>{itemDetail.name}</h1>
                            <p>0</p>
                        </div>
                    </Col>
                ))} 
            </Row>
        </div>
        </>
    )
}