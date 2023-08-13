import "./CheckBox.css"
export default function CheckBox(props){
    return(
    <div id="inputPreview">
		<input name="cssCheckbox" id={props.id} type="checkbox" class="css-checkbox"/>
        <label for={props.id}></label>
	</div>
    )
}