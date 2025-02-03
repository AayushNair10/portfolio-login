const SizeCard =(props)=> {
    if(!props.size){
        return 'uk-child-width-1-3';
    }
    if (props.size <= 20) {
        return 'uk-child-width-1-5';
    }
    else if (props.size <= 35) {
        return 'uk-child-width-1-4';
    }
    else if (props.size <= 70) {
        return 'uk-child-width-1-2';
    }
    else{
        return 'uk-child-width-1-1';
    }
}
export default SizeCard;