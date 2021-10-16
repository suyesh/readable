const index = require("./index")
// @ponicode
describe("index.updateCategories", () => {
    test("0", () => {
        let callFunction = () => {
            index.updateCategories(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.updateCategories(9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.updateCategories("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.updateCategories("da7588892")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.updateCategories(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.updatePosts", () => {
    test("0", () => {
        let callFunction = () => {
            index.updatePosts(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.updatePosts(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.updatePosts(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.createPost", () => {
    test("0", () => {
        let callFunction = () => {
            index.createPost("https://accounts.google.com/o/oauth2/revoke?token=%s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.createPost("http://www.example.com/route/123?foo=bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.createPost("https://twitter.com/path?abc")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.createPost("http://www.croplands.org/account/confirm?t=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.createPost("Www.GooGle.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.createPost(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.getAllCategories", () => {
    test("0", () => {
        let callFunction = () => {
            index.getAllCategories()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.getAllPosts", () => {
    test("0", () => {
        let callFunction = () => {
            index.getAllPosts()
        }
    
        expect(callFunction).not.toThrow()
    })
})
