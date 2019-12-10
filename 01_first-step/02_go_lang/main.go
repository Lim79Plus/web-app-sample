package main

import "log"

func main() {
	tmp()
}

func tmp() {
	msg := "TONKATSU YAKITORI"
	log.Printf("hello %v", msg)
	value := 1
	log.Printf("value is %v", value)
	value++
	log.Printf("after value is %v", value)

	p := []string{
		"first",
		"second",
	}

	for c, v := range p {
		log.Printf("the forloop number is %v , the word is %v the word lenght is %v", c, v, len(v))

		if len(p) == c+1 {
			log.Print("this is the last loop!")
		}
	}
}
