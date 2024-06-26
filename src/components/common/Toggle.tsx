import { Switch } from '@headlessui/react';

type ToggleProps = {
  enabled: boolean;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
};

function classNames(...classes: Array<string | boolean>): string {
  return classes.filter(Boolean).join(' ');
}

function Toggle({ enabled, setEnabled }: ToggleProps) {
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={classNames(
        enabled ? 'bg-indigo-600' : 'bg-gray-200',
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:!outline-none focus:ring-offset-2',
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
        )}
      />
    </Switch>
  );
}

export default Toggle;
