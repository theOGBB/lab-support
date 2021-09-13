class TextField extends Field {
    value: String = "";
    default_value: String = "Enter Text Here";
    name: String;
    
    constructor(name: String) {
        super("text");

        this.name = name;
    }

    renderable() {
        return ""
    }
}