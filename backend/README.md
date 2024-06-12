## DB Collections

### Users  
- firstName: String 
- lastName: String
- age: Number
- email: String 
- password: String 
- telephon: Number 
- role: enum ["member", "trainer", "admin"] 
- picture: String  
- address: String
- trainerType: enum ["yoga", "pilates", "fitness"] 
- trainerDescription: String
## Users' end points:
- POST/login 
- POST/logout 
- POST/signup

- GET/members
- GET/offers
- GET/activities
- GET/events
- GET/trainers
- GET/contacts

- POST/offers       (admin be able to post the offers)
- POST/activities   (trainer be able to post activities)
- POST/events       (trainer be able to post events)
- POST/trainers     (post trainers profile by admin)
- POST/contactUs    (members be able to post message)
- POST/reviews      (members be able to post the reviews)
- POST/booking      ( member be able to post the booking for the trainers or admin)


### Activities
- name: String 
- picture: String 
- description: String 
- trainerName: String 
- capacity: Number 
- services: ["yoga", "pilates", "fitness"] 
- date: String
- duration: Number/String

### Events
- title: string
- description: String
- award: String
- capacity: Number
- date: String

### Offers  
- title: String
- description: String
- picture: String
- date: String
- duration: String


### Contact Form
- firstName: String
- lastName: String
- email: String
- telephon: Number
- message: String


### Review  
- courseName: String 
- comments: String
- rating: Number  (min:1, max:5) 
- type: enum ["yoga", "pilates", "fitness"] 
- timestamp: Sting

### Booking
- serviceId: Ref(Yoga, Pilates, Fitness)
- bookingDate: String
- bookingTime: String
- status: {
    type: String,
    default: "Pending",
    enum: enum: ['Pending', 'Confirmed', 'Cancelled']
}

Add new offer
  
POST /offer 
DELETE /offer/:id  

app.post("/offer", isAdmin, createNewOffer) 
app.delete("/offer/:id", isAdmin, deleteOffer)



## Endpoints  
POST /user/login 
POST /user/logout 
POST /user/signup  

List all the trainers   
 