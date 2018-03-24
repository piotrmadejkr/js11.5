$(function() {

    function Button(text) {
    this.text = text || 'Hello';
    }
    
    Button.prototype = {
        create: function() {
            
            var self = this;
            this.$element = $('<button>');
            this.$element.text(this.text);
            this.$element.click(function() {
                alert(self.text);  
            });
            this.$element.appendTo($('body'));
        }
    }
    var btn1 = new Button('Hello!');
    btn1.create();
    var btn2 = new Button('this');

    btn2.create();
    var btn3 = new Button('is');

    btn3.create();

    var btn4 = new Button('"self"');

    btn4.create();

    var btn5 = new Button('method');

    btn5.create();

    var btn6 = new Button('exercise');

    btn6.create();

    var btn7 = new Button('!');

    btn7.create();
        
    });