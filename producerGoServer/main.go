package main

import(
	"fmt"
	"github.com/confluentinc/confluent-kafka-go/kafka"
    "github.com/gin-gonic/gin"
    "net/http"
)


type SendRequest struct {
    Number string `json:"number" binding:"required"`
}

func main(){
	fmt.Println("starting server....")
	r := gin.Default()

	r.GET("/ping",func(c *gin.Context){
		c.JSON(200, gin.H{
			"message":"pong",
		})
	})

    r.POST("/send", func(c *gin.Context) {
        var json SendRequest

        if err := c.ShouldBindJSON(&json); err != nil {
            c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
            return
        }

        producer, err := kafka.NewProducer(&kafka.ConfigMap{"bootstrap.servers": "localhost:9092"})
        if err != nil {
            c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
            return
        }
        defer producer.Close()

        topic := "messages"
        producer.Produce(&kafka.Message{
            TopicPartition: kafka.TopicPartition{Topic: &topic, Partition: kafka.PartitionAny},
            Value:          []byte(json.Number),
        }, nil)

        c.JSON(http.StatusOK, gin.H{"status": "message sent"})
    })

    r.Run(":8081")
}