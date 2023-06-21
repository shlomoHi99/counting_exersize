Question #1:
    Props are objects passed to the component from the component that calls her.
    In that way we can use a generic component with different props to create different parts of our site.
    For example if we want to show the details of a bunch of people we can create a component that lays out 
    the generic card and every time we use it we send the details of a different person.

Question #2:
    JSX is the react way to store HTML and CSS in a js object, and also we can inject into a HtMl object 
    a variable that we can change along the way, or use a loop on an array and make an element from each object 
    by using the current object in the loop.

Question #3:
    UseState and useEffect are Hooks wich are built in functions that comes with react, 

    useState - is a way to create an object that is global and could be changed wherever we want it and it would be changed 
                in all the places it's at.
                when using it we first declare a new variable with let or const, then we open square brackets,
                inside them the first variable is the state, the object we need to be global.
                the second variable inside the brackets (not necessary) is the function to update the variable,
                then comes the equal sign and then the useState() function, we can initialize the state by putting 
                the initial value inside the sircle brackets.
                for ex. const [API, setAPI] = useSAtate('HTTPS/www.api.com');

    useEffect - is the way we can control the rendering of a function or a proccess that react basic behavior is to render 
                too many times or infinite times.
                to use the useEffect we write use effect() and inside the brackets we implement the function or call the API,
                after that we write a comma and then in a square brackets, the deppendancies which are the things to which the useEffect will consider 
                when considering if to re render, meaning, if we leave the brackets empty, the useEffect will happen twice, once when the page loads, and the second time wen it closes. if we use a variable inside the brackets, the useEffect will also happen when the variable changes.
                for ex. 
                    useEffect(function(){
                            #someting;
                    }, [someVariable]);

Question #5:
    The key-prop is a property we send when creating an array of HTML objects or components,
    each item should get a unique key so react would know later how to reffer to each item.
    for ex.
         let arr = obj.map(function(item, i){
                return <div key={i}>{item}</div>
        })

Question #6:
    The difference between state and props is that when using state we can get a global like variable between components,
    and we can change a variable in one component and it will automaticcaly change in all other usses in every component it's being used,
    where as props is only passed from the calling component to the component it's calling.

Question #7:
    React is a js platform that is one page platform, which means that you can write HTML CSS and js in one page,
    it lets you run loops on HTML objects for example.

Question #8:
    The index page is the page that connects to the HTML page, it has a root component that everything in the page is inside of.
    in order to have multiple pages, we need the app component thad the index calles, in the app component we have the pages of our website and the pathes to them.