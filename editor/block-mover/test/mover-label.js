/**
 * External dependencies
 */
import { expect } from 'chai';

/**
 * Internal dependencies
 */
import { getBlockMoverLabel, getMultiBlockMoverLabel } from '../mover-label';

describe( 'block mover', () => {
	describe( 'getBlockMoverLabel', () => {
		const type = 'TestType';

		it( 'Should generate a title for the first item moving up', () => {
			expect( getBlockMoverLabel( 1, {
				type,
				firstIndex: 0,
				isFirst: true,
				isLast: false,
				dir: -1,
			} ) ).to.equal(
				`Block "${ type }" is at the beginning of the content and can’t be moved up`
			);
		} );

		it( 'Should generate a title for the last item moving down', () => {
			expect( getBlockMoverLabel( 1, {
				type,
				firstIndex: 3,
				isFirst: false,
				isLast: true,
				dir: 1,
			} ) ).to.equal(
				`Block "${ type }" is at the end of the content and can’t be moved down`
			);
		} );

		it( 'Should generate a title for the second item moving up', () => {
			expect( getBlockMoverLabel( 1, {
				type,
				firstIndex: 1,
				isFirst: false,
				isLast: false,
				dir: -1,
			} ) ).to.equal(
				`Move "${ type }" block from position 2 up to position 1`
			);
		} );

		it( 'Should generate a title for the second item moving down', () => {
			expect( getBlockMoverLabel( 1, {
				type,
				firstIndex: 1,
				isFirst: false,
				isLast: false,
				dir: 1,
			} ) ).to.equal(
				`Move "${ type }" block from position 2 down to position 3`
			);
		} );

		it( 'Should generate a title for the only item in the list', () => {
			expect( getBlockMoverLabel( 1, {
				type,
				firstIndex: 0,
				isFirst: true,
				isLast: true,
				dir: 1,
			} ) ).to.equal(
				`Block "${ type }" is the only block, and cannot be moved`
			);
		} );
	} );

	describe( 'getMultiBlockMoverLabel', () => {
		it( 'Should generate a title moving multiple blocks up', () => {
			expect( getMultiBlockMoverLabel( 4, {
				firstIndex: 1,
				isFirst: false,
				isLast: true,
				dir: -1,
			} ) ).to.equal(
				'Move 4 blocks from position 2 up by one place'
			);
		} );

		it( 'Should generate a title moving multiple blocks down', () => {
			expect( getMultiBlockMoverLabel( 4, {
				firstIndex: 0,
				isFirst: true,
				isLast: false,
				dir: 1,
			} ) ).to.equal(
				'Move 4 blocks from position 1 down by one place'
			);
		} );

		it( 'Should generate a title for a selection of blocks at the top', () => {
			expect( getMultiBlockMoverLabel( 4, {
				firstIndex: 1,
				isFirst: true,
				isLast: true,
				dir: -1,
			} ) ).to.equal(
				'Blocks cannot be moved up as they are already at the top'
			);
		} );

		it( 'Should generate a title for a selection of blocks at the bottom', () => {
			expect( getMultiBlockMoverLabel( 4, {
				firstIndex: 2,
				isFirst: false,
				isLast: true,
				dir: 1,
			} ) ).to.equal(
				'Blocks cannot be moved down as they are already at the bottom'
			);
		} );
	} );
} );
