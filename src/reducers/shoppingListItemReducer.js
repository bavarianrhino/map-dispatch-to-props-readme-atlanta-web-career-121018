export default function shoppingListItemReducer(
	state = {
        items: [],
        count: 0
	},
	action,
) {
	console.log(action);
	switch (action.type) {
		case 'INCREASE_COUNT':
			console.log(state.items.concat(state.items.length));
			return Object.assign(
				{},
				{
					items: state.items.concat(state.items.length),
                },
                {
                    count : state.count + 863
                }
			);

		default:
			console.log(state);
			return state;
	}
}
