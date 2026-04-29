/**
 * XO Event Calendar — month navigation (delegated; no inline handlers).
 */
(function () {
	'use strict';

	function encodeParams(data) {
		return Object.keys(data)
			.map(function (key) {
				return (
					encodeURIComponent(key) +
					'=' +
					encodeURIComponent(data[key] == null ? '' : String(data[key]))
				);
			})
			.join('&');
	}

	function setLoading(container, loading) {
		if (!container) {
			return;
		}
		if (loading) {
			container.setAttribute('disabled', 'disabled');
			container.classList.add('xo-calendar-loading');
		} else {
			container.removeAttribute('disabled');
			container.classList.remove('xo-calendar-loading');
		}
	}

	function parseNavPayload(button) {
		var raw = button.getAttribute('data-xo-cal-nav');
		if (!raw) {
			return null;
		}
		try {
			return JSON.parse(raw);
		} catch (e) {
			return null;
		}
	}

	function postAjax(url, body, onDone, onFail) {
		var request = new XMLHttpRequest();
		request.open('POST', url, true);
		request.setRequestHeader(
			'Content-Type',
			'application/x-www-form-urlencoded; charset=UTF-8'
		);
		request.onreadystatechange = function () {
			if (request.readyState !== 4) {
				return;
			}
			if (request.status >= 200 && request.status < 300) {
				onDone(request.responseText);
			} else if (typeof onFail === 'function') {
				onFail(request);
			}
		};
		request.send(body);
	}

	function sendEventCalendarNav(button, payload) {
		var container = button.closest('.xo-event-calendar');
		if (!container || typeof xo_event_calendar_object === 'undefined') {
			return;
		}
		var monthsWrap = container.getElementsByClassName('xo-months')[0];
		if (!monthsWrap) {
			return;
		}
		setLoading(container, true);
		var data = {
			action: xo_event_calendar_object.action,
			id: container.id || '',
			month: payload.month,
			event: payload.show_event ? '1' : '0',
			categories: payload.categories || '',
			holidays: payload.holidays || '',
			prev: payload.prev_month_feed,
			next: payload.next_month_feed,
			start_of_week: payload.start_of_week,
			months: payload.months,
			navigation: payload.navigation ? '1' : '0',
			title_format: payload.title_format || '',
			is_locale: payload.is_locale ? '1' : '0',
			columns: payload.columns,
			base_month: payload.base_month || '',
		};
		postAjax(
			xo_event_calendar_object.ajax_url,
			encodeParams(data),
			function (response) {
				setLoading(container, false);
				monthsWrap.innerHTML = response;
			},
			function () {
				setLoading(container, false);
				button.disabled = false;
			}
		);
	}

	function sendSimpleCalendarNav(button, payload) {
		if (typeof xo_simple_calendar_object === 'undefined') {
			return;
		}
		var calendarsWrap = button.closest('.calendars');
		if (!calendarsWrap) {
			return;
		}
		var container =
			button.closest('.xo-simple-calendar') || calendarsWrap;
		setLoading(container, true);
		var data = {
			action: xo_simple_calendar_object.action,
			id: container.id || '',
			month: payload.month,
			holidays: payload.holidays || '',
			prev: payload.prev_month_feed,
			next: payload.next_month_feed,
			start_of_week: payload.start_of_week,
			months: payload.months,
			navigation: payload.navigation ? '1' : '0',
			title_format: payload.title_format || '',
			is_locale: payload.is_locale ? '1' : '0',
			columns: payload.columns,
			caption_color: payload.caption_color || '',
			caption_bgcolor: payload.caption_bgcolor || '',
			base_month: payload.base_month || '',
		};
		postAjax(
			xo_simple_calendar_object.ajax_url,
			encodeParams(data),
			function (response) {
				setLoading(container, false);
				calendarsWrap.innerHTML = response;
			},
			function () {
				setLoading(container, false);
				button.disabled = false;
			}
		);
	}

	document.addEventListener('click', function (e) {
		var btn = e.target.closest('[data-xo-cal-nav]');
		if (!btn || btn.disabled) {
			return;
		}
		var payload = parseNavPayload(btn);
		if (!payload || !payload.kind) {
			return;
		}
		e.preventDefault();
		if (payload.kind === 'event') {
			sendEventCalendarNav(btn, payload);
		} else if (payload.kind === 'simple') {
			sendSimpleCalendarNav(btn, payload);
		}
	});

	/**
	 * @deprecated 3.3.2 Kept for compatibility; prefer data-xo-cal-nav buttons.
	 */
	xo_event_calendar_month = function (
		el,
		month,
		event,
		categories,
		holidays,
		prev,
		next,
		start_of_week,
		months,
		navigation,
		title_format,
		is_locale,
		columns,
		base_month
	) {
		sendEventCalendarNav(el, {
			kind: 'event',
			month: month,
			show_event: !!event,
			categories: categories,
			holidays: holidays,
			prev_month_feed: prev,
			next_month_feed: next,
			start_of_week: start_of_week,
			months: months,
			navigation: !!navigation,
			title_format: title_format || '',
			is_locale: !!is_locale,
			columns: columns,
			base_month: base_month || '',
		});
		return false;
	};

	/**
	 * @deprecated 3.3.2 Kept for compatibility; prefer data-xo-cal-nav buttons.
	 */
	xo_simple_calendar_month = function (
		el,
		month,
		holidays,
		prev,
		next,
		start_of_week,
		months,
		navigation,
		title_format,
		is_locale,
		columns,
		caption_color,
		caption_bgcolor,
		base_month
	) {
		sendSimpleCalendarNav(el, {
			kind: 'simple',
			month: month,
			holidays: holidays,
			prev_month_feed: prev,
			next_month_feed: next,
			start_of_week: start_of_week,
			months: months,
			navigation: !!navigation,
			title_format: title_format || '',
			is_locale: !!is_locale,
			columns: columns,
			caption_color: caption_color || '',
			caption_bgcolor: caption_bgcolor || '',
			base_month: base_month || '',
		});
		return false;
	};
})();
