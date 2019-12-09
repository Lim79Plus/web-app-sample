package infra

import "testing"

func TestMessageInsert(t *testing.T) {
	d := Message{
		99,
		"testTitle",
		"testDescription",
		"testPath",
		"",
	}
	MessageInsert(d)
	t.Fatal("TestMessageInsert test end")
}
