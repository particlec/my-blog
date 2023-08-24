import { Card, Col, Row } from "antd";
import { useEffect, useState } from "react";

// https://blog.csdn.net/qq_45931842/article/details/119544403     参考图床方案

// 参考 v2的网站
const PhotoFrameDisplay = () => {
    const [photos, setPhotos] = useState([
        { id: 1, src: 'photo1.jpg', title: 'Photo 1' },
        { id: 2, src: 'photo2.jpg', title: 'Photo 2' },
        { id: 3, src: 'photo3.jpg', title: 'Photo 3' },
        { id: 1, src: 'photo1.jpg', title: 'Photo 1' },
        { id: 2, src: 'photo2.jpg', title: 'Photo 2' },
        { id: 3, src: 'photo3.jpg', title: 'Photo 3' },
        { id: 1, src: 'photo1.jpg', title: 'Photo 1' },
        { id: 2, src: 'photo2.jpg', title: 'Photo 2' },
        { id: 3, src: 'photo3.jpg', title: 'Photo 3' },
        { id: 1, src: 'photo1.jpg', title: 'Photo 1' },
        { id: 2, src: 'photo2.jpg', title: 'Photo 2' },
        { id: 3, src: 'photo3.jpg', title: 'Photo 3' },
        { id: 1, src: 'photo1.jpg', title: 'Photo 1' },
        { id: 2, src: 'photo2.jpg', title: 'Photo 2' },
        { id: 3, src: 'photo3.jpg', title: 'Photo 3' },

        { id: 1, src: 'photo1.jpg', title: 'Photo 1' },
        { id: 2, src: 'photo2.jpg', title: 'Photo 2' },
        { id: 3, src: 'photo3.jpg', title: 'Photo 3' },
    ]);

   
  
    useEffect(() => {
      // 模拟异步获取照片数据
      const fetchPhotos = async () => {
        const response = await fetch('api/photos'); // 根据实际情况更改获取数据的方式和路径
        const data = await response.json();
        const shuffledPhotos = shuffleArray(data.photos); // 随机排序照片数组
        setPhotos(shuffledPhotos as any);
      };
      
  
      fetchPhotos();
    }, []);
  
    const shuffleArray = (array:any) => {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    };


  
    return (
      <div className="container mx-auto px-2 py-3">
        <Row gutter={[16, 16]}>
          {photos.map((photo:any) => (
            <Col key={photo.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                cover={<img alt={photo.title} src={photo.src} className="h-full w-full object-cover" />}
                hoverable
                
              >
                <Card.Meta title={photo.title} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  };

  export default PhotoFrameDisplay;