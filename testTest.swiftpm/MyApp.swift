import SwiftUI

@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}

var a = 5
var c = 7
while c >= 0 {
    a -= 3
    c -= 1
}
print(a)
