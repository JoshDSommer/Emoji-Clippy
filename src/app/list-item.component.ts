import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'list-item',
	template: `
	<div class="list-item">
		<label>{{ value }}</label>
		<button class="btn" type="button" ngxClipboard [cbContent]="value" >copy</button>
	</div>
	`,
	styles: [`
		.list-item{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 15px;
		height:20px;
	}

	label{
			font-size: 1.3em;
		}
	button{
		background-color: transparent;
		border: 1px solid #030303;
		border-radius: 9px;
	}
	`]
})

export class ListItemComponent implements OnInit {
	@Input() value: string;

	ngOnInit() { }
}