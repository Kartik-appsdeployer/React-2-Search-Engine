import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function ShowData({ result }) {
    return (
        <>
            <hr />
            <h1 style={{fontSize: '50px'}}>Results</h1>
            <div className="context">
                <div className="content">
                {
                    result.map(object => (
                        <>
                            <Card style={{ borderRadius: '27px', padding: '30px', width: '21rem', margin: '30px', background: 'white' }}>
                                <Card.Body>
                                    <Card.Title style={{marginBottom: '20px'}}>{object.title}</Card.Title>
                                    
                                    <a href={object.url} target="_blank"><Button variant="primary">Details</Button></a>
                                </Card.Body>
                            </Card>
                        </>
                    ))
                }
                </div>
            </div>
        </>
    )
}
export default ShowData;